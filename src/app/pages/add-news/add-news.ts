import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-add-news',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, QuillModule],
  templateUrl: './add-news.html',
  styleUrl: './add-news.scss',
})
export class AddNews {
  router = inject(Router);
  fb = inject(FormBuilder);

  newsForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    image: [null],
  });

  selectedImage: File | null = null;
  previewHtml: string | null = null;

  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ header: 1 }, { header: 2 }, { header: 3 }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ direction: 'rtl' }, { align: [] }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    imageResize: {
      modules: ['Resize', 'DisplaySize', 'Toolbar'],
    },
    bounds: '.custom-quill-editor',
  };

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      this.newsForm.patchValue({ image: file });
    }
  }

  addNews() {
    if (this.newsForm.invalid) return;
    this.previewHtml = this.newsForm.get('description')?.value ?? null;
  }
}
