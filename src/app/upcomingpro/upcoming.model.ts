import { Book } from '../shared/Book.model';

export class Upcoming
{
  // Informaion of projects
  public name: string;
  public domain:string;
  public description: string;
  public github: string;
  public linkdin:string;
  public member:string;
 // public Books: Book[];

  constructor(name: string,domain:string, desc: string, github: string,linkdin:string,member:any) 
  {
    this.name = name;
    this.domain=domain;
    this.description = desc;
    this.github = github;
    this.linkdin=linkdin;
    this.member=member;
    //this.Books = Books;
  }
}
