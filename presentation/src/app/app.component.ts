import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  currentStage = 0;

  stages = [
    {
      year: '2013-2017',
      age: 11,
      class: '6ème (6th Grade)',
      categories: {
        'Intro to Programming': ['Scratch']
      }
    },
    {
      year: '2017-2020',
      age: 15,
      class: 'Baccalauréat STI2D (High School Technical Diploma)',
      categories: {
        'Web Development': ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
        'Programming': ['Python', 'Arduino']
      }
    },
    {
      year: '2020-2022',
      age: 18,
      class: 'Licence I.EEEA (Double Degree: Math & Computer Science)',
      categories: {
        'Web Development': ['HTML', 'CSS', 'JavaScript', 'PHP'],
        'Programming': ['C', 'Python'],
        'Database': ['SQL', 'MySQL']
      }
    },
    {
      year: '2022-2024',
      age: 20,
      class: 'BTS SIO (Higher Diploma in IT Services)',
      categories: {
        'Web Development': ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Symfony'],
        'Programming': ['C#', '.NET'],
        'Database': ['SQL', 'T-SQL', 'SQL Server'],
        'Network & Security': ['Base in Networking', 'Cybersecurity']
      }
    },
    {
      year: '2024-2027',
      age: 22,
      class: 'A3 Ingénieur (3rd Year Engineering School)',
      categories: {
        'Web Development': ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Symfony'],
        'Programming': ['C#', '.NET'],
        'Database': ['SQL', 'T-SQL', 'SQL Server'],
        'Network & Security': ['Networking', 'Cybersecurity']
      }
    }
  ];


  hoveredCategory: string | null = null;

  getCategories(): string[] {
    return Object.keys(this.stages[this.currentStage].categories);
  }

  getSkills(category: string): string[] {
    const categories: any = this.stages[this.currentStage].categories;
    return categories[category];
  }
  
  
  
  

  nextStage() {
    if (this.currentStage < this.stages.length - 1) {
      this.currentStage++;
    }
  }

  previousStage() {
    if (this.currentStage > 0) {
      this.currentStage--;
    }
  }
}
