import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-add-news',
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

  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ header: 1 }, { header: 2 }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
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

    const formData = new FormData();
    formData.append('title', this.newsForm.value.title!);
    formData.append('description', this.newsForm.value.description!);
    if (this.selectedImage) {
      formData.append('image', this.selectedImage);
    }

    console.log('FormData ready:', formData);
  }
}
