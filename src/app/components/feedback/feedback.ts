import { Component } from '@angular/core';

@Component({
    selector: 'app-feedback',
    standalone: true,
    imports: [],
    templateUrl: './feedback.html',
    styleUrl: './feedback.scss'
})
export class Feedback {

    submitFeedback(event: Event) {
        event.preventDefault();
        alert('Thank you for your feedback!');
        // In a real app, we would send this data to a backend
        (event.target as HTMLFormElement).reset();
    }
}
