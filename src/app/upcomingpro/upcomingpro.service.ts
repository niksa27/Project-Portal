
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Upcoming } from './upcoming.model';
import { Book } from '../shared/Book.model';
import { BookShoppingListService } from '../book-list/bookshopping-list.service';

@Injectable({
  providedIn: 'root'
})

export class UpcomingproService 
{
  projectChanged = new Subject<Upcoming[]>();
  // subject here used from the rxjs 
  private projects: Upcoming[] = [
    new  Upcoming(
      'Virtual File System',
      'System Programming ',
      'This project Simulate Linux File System on any platform. We implement all file subsystems system calls and its coresponding data structures.',
      'https://github.com/topics/system-programming?l=c&o=asc&s=forks',
      'https://www.linkedin.com/feed/',
      'Number of members required:2 '),

      /*[
        new Book('UNIX Internals - Bach',430),
        new Book('Linux System Programming - Robert Love', 820)
      ]),*/

    new  Upcoming(
      'Institute Automation System',
      'php program',
      'We automate every administartive process of institute using this project. We implement web based application of this purpose. We use PHP for server side technology and we use html and css to design the frontend. We store the data on server side by using mysql.',
      'https://github.com/topics/system-programming?l=c&o=asc&s=forks',
      'https://www.linkedin.com/feed/',
      'Number of members required :2 '),
    /*  [
        new Book('Learning PHP', 870)
      ]),*/

      new  Upcoming(
        'Character Device Driver',
        'Systm Programming',
        'This device driver implements all functionality of devices. In this device driver we consider virtual device for testing purpose. We implement our own open,close,read, write system call. This device driver works onLinux operating system',
        'https://github.com/topics/system-programming?l=c&o=asc&s=forks',
        'https://www.linkedin.com/feed/',
        'Number of members required:2 '),
       /* [
          new Book('Linux Kernel Module Programming Guide - Salzmen', 560),
          new Book('Linux Device Driver - Robert Love', 720)
        ]),*/

        new Upcoming(
          'Cliboard Manager',
          'General',
          'As clipboard is used for communication between the applications. We design Windows application which recevies message when there is any change in clipboard. We accept that message and display that data on editor. As well as we preserve the data in file for administrative purpose.',
          'https://github.com/topics/system-programming?l=c&o=asc&s=forks',
          'https://www.linkedin.com/feed/',
          'Number of members required:2 '),
          /*[
            new Book('Windows Application Programming Soloman', 1200),
            new Book('Windows Internals', 820)
          ]),*/

          new Upcoming(
            'ProcMon - Process Monitoring Tool',
            'Windows SDK',
            'This project maintains record of each running process in RAM. We maintain process name, number of threads,its size,attahed DLL to the process. We  aintain per day log of this inpformation which can be used for analytical purpose.',
            'https://github.com/topics/system-programming?l=c&o=asc&s=forks',
            'https://www.linkedin.com/feed/',
            'Number of members required:2 '),
           /* [
              new Book('Process Subsystems Guide', 320)
            ]),*/

            new Upcoming(
              'Registry Editor',
              'Windows SDK',
              'In windows every application saves its important settings in Clipboard. Clipboard is considered as Operating systems database. NBy using our project we can add , remove or update any registry entry.',
              'https://github.com/topics/system-programming?l=c&o=asc&s=forks',
              'https://www.linkedin.com/feed/',
              'Number of members required:2 '),
             /* [
                new Book('Meat', 1),
                new Book('French Fries', 20)
              ])*/
  ];

  constructor(private slService:BookShoppingListService) 
  {}

  // Functionality provided by service

  getProjects() 
  {
    return this.projects.slice();
  }

  getProject(index: number) {
    return this.projects[index];
  }

  addBooksToShoppingList(Books: Book[]) 
  {
    this.slService.addBooks(Books);
  }

  //ADD the code to update the firebase
  addProject(recipe:  Upcoming) 
  {
    this.projects.push(recipe);
    this.projectChanged.next(this.projects.slice());
  }

  updateProject(index: number, newRecipe:  Upcoming) 
  {
    this.projects[index] = newRecipe;
    this.projectChanged.next(this.projects.slice());
  }

  deleteProject(index: number) 
  {
    this.projects.splice(index, 1);
    this.projectChanged.next(this.projects.slice());
  }
}
