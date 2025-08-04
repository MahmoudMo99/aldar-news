import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import interact from 'interactjs';

@Component({
  selector: 'app-add-news',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, QuillModule],
  templateUrl: './add-news.html',
  styleUrl: './add-news.scss',
})
export class AddNews {
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  readonly newsForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    image: [null as File | null],
  });

  previewHtml: string | null = null;

  readonly quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ header: [1, 2, 3, false] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ direction: 'rtl' }, { align: [] }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];
    if (file) {
      this.newsForm.patchValue({ image: file });
    }
  }

  onContentChanged(): void {
    setTimeout(() => {
      const editor = document.querySelector('.ql-editor');
      if (!editor) return;

      editor.querySelectorAll('img').forEach((img) => {
        this.enableInteractOnImage(img as HTMLImageElement);
      });
    }, 200);
  }

  private enableInteractOnImage(img: HTMLImageElement): void {
    if (img.classList.contains('interact-enabled')) return;

    img.classList.add('interact-enabled');
    img.style.position = 'relative';
    img.style.cursor = 'move';

    interact(img)
      .draggable({
        listeners: {
          move(event) {
            const target = event.target as HTMLElement;
            const x =
              parseFloat(target.getAttribute('data-x') || '0') + event.dx;
            const y =
              parseFloat(target.getAttribute('data-y') || '0') + event.dy;

            target.style.transform = `translate(${x}px, ${y}px)`;
            target.setAttribute('data-x', x.toString());
            target.setAttribute('data-y', y.toString());
          },
        },
      })
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        listeners: {
          move(event) {
            const target = event.target as HTMLElement;
            const { width, height } = event.rect;
            target.style.width = `${width}px`;
            target.style.height = `${height}px`;
          },
        },
        modifiers: [
          interact.modifiers.restrictSize({
            min: { width: 50, height: 50 },
            max: { width: 800, height: 800 },
          }),
        ],
      });
  }

  addNews(): void {
    if (this.newsForm.invalid) return;
    this.previewHtml = this.newsForm.get('description')?.value ?? null;

    // if (this.newsForm.invalid) return;

    // const formData = {
    //   title: this.newsForm.get('title')?.value,
    //   description: this.newsForm.get('description')?.value, // ده HTML
    //   image: this.selectedImage, // تقدر تبعته كـ FormData لو في رفع ملفات
    // };

    // console.log('To be sent to backend:', formData);

    // // send formData to backend via your service
  }
}
