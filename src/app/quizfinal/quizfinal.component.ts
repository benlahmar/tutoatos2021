import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Quiz } from '../model/Quiz';

@Component({
  selector: 'app-quizfinal',
  templateUrl: './quizfinal.component.html',
  styleUrls: ['./quizfinal.component.css']
})
export class QuizfinalComponent implements OnInit {

  cls=false;
  page=0;
data={
  "id": 1,
  "name": "Asp.Net Quiz",
  "description": "Asp.Net Quiz (contains webform, mvc, web API, etc.)",
  "questions": [
      {
          "id": 1010,
          "name": "ASP.NET webform separates the HTML output from program logic using a feature named as",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Exception",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Code-behind",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Code-front",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "None of the above",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1011,
          "name": "The feature in ASP.NET 2.0 that is used to fire a normal postback to a different page in the application is called",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Theme",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Code-front",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Cross Page Posting",
                  "isAnswer": true
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "None of the above",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1012,
          "name": "What class does the ASP.NET Web Form class inherit from by default?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "System.Web.UI.Page",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "System.Web.UI.Form",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "System.Web.GUI.Page",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "System.Web.Form",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1013,
          "name": "What does MVC stand for?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Model View Controller",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Maximum Virtual Control",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Microsoft Visual Core",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "None of the above",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1014,
          "name": "Which of the following does NOT require type casting?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Session",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "TempData",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "ViewData",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "ViewBag",
                  "isAnswer": true
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1015,
          "name": "Which is the correct order of Page life-cycle in asp.net webform?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Init, PreRender, Load",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Load, PreRender, Init",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Init, Load, PreRender",
                  "isAnswer": true
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "None of the above",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1016,
          "name": "Which of these data source controls do not implement caching?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "ObjectDataSource",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "LinqDataSource",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "SqlDataSource",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "XmlDataSource",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1017,
          "name": "Which tag asp:Label control by default renders to?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "div",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "span",
                  "isAnswer": true
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "body",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "label",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1018,
          "name": "Which method do you use to explicitly kill a user's session?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "Session.Terminate()",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Session.TimeOut()",
                  "isAnswer": false
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Session.Abondon()",
                  "isAnswer": true
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "Session.Kill()",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      },
      {
          "id": 1019,
          "name": "Which of the following object is ideal for keeping data alive for a single request?",
          "questionTypeId": 1,
          "options": [
              {
                  "id": 1055,
                  "questionId": 1010,
                  "name": "HttpContext",
                  "isAnswer": true
              },
              {
                  "id": 1056,
                  "questionId": 1010,
                  "name": "Session",
                  "isAnswer": false
              },
              {
                  "id": 1057,
                  "questionId": 1010,
                  "name": "Cookies",
                  "isAnswer": false
              },
              {
                  "id": 1058,
                  "questionId": 1010,
                  "name": "SqlServer",
                  "isAnswer": false
              }
          ],
          "questionType": {
              "id": 1,
              "name": "Multiple Choice",
              "isActive": true
          }
      }
  ],
  "config":{
    "allowBack": true,
    "allowReview": true,
    "autoMove": true,  //  
    "duration": 10,  // 
    "pageSize": 10,
    "requiredAll": true,  // 
    "richText": true,
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showClock": true,
    "showPager": true,
    "theme": "string"
  }
};
data2={
    "id": 2,
    "name": "C# and .Net Framework",
    "description": "C# and .Net Quiz (contains C#, .Net Framework, Linq, etc.)",
    "config":{
        "allowBack": true,
        "allowReview": true,
        "autoMove": true,  //  
        "duration": 10,  // 
        "pageSize": 10,
        "requiredAll": true,  // 
        "richText": true,
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showClock": true,
        "showPager": true,
        "theme": "string"
      },
    "questions": [
        {
            "id": 1010,
            "name": "Which of the following assemblies can be stored in Global Assembly Cache?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "Private Assemblies",
                    "isAnswer": false
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "Friend Assemblies",
                    "isAnswer": false
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "Public Assemblies",
                    "isAnswer": false
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "Shared Assemblies",
                    "isAnswer": true
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        },
        {
            "id": 1011,
            "name": "Which of the following .NET components can be used to remove unused references from the managed heap?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "Language Infrastructure",
                    "isAnswer": false
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "CLR",
                    "isAnswer": false
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "Garbage Collector",
                    "isAnswer": true
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "Class Loader",
                    "isAnswer": false
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "CTS",
                    "isAnswer": false
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        },
        {
            "id": 1012,
            "name": "Which of the following utilities can be used to compile managed assemblies into processor-specific native code?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "gacutil",
                    "isAnswer": false
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "ngen",
                    "isAnswer": true
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "dumpbin",
                    "isAnswer": false
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "ildasm",
                    "isAnswer": false
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        },
        {
            "id": 1013,
            "name": "Which of the following is NOT an Arithmetic operator in C#.NET?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "** (Double Star)",
                    "isAnswer": true
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "+ (Plus)",
                    "isAnswer": false
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "/ (Divide)",
                    "isAnswer": false
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "% (Modulo)",
                    "isAnswer": false
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        },
        {
            "id": 1014,
            "name": "Which of the following statements is correct about an interface used in C#.NET?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "If a class implements an interface partially, then it should be an abstract class.",
                    "isAnswer": true
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "A class cannot implement an interface partially.",
                    "isAnswer": false
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "An interface can contain static methods.",
                    "isAnswer": false
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "An interface can contain static data.",
                    "isAnswer": false
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        },
        {
            "id": 1015,
            "name": "What does the term <strong>immutable</strong> means in term of string objects?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "We can modify characters included in the string",
                    "isAnswer": false
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "We cannot modify characters contained in the string",
                    "isAnswer": true
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "We cannot perform various operation of comparison, inserting, appending etc",
                    "isAnswer": false
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "None of the above",
                    "isAnswer": false
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        },
        {
            "id": 1016,
            "name": "Which of the following is NOT a .NET Exception class?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "Exception",
                    "isAnswer": false
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "StackMemoryException",
                    "isAnswer": true
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "DivideByZeroException",
                    "isAnswer": false
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "InvalidOperationException",
                    "isAnswer": false
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        },
        {
            "id": 1017,
            "name": "In C#.NET if we do not catch the exception thrown at runtime then which of the following will catch it?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "Compiler",
                    "isAnswer": false
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "CLR",
                    "isAnswer": true
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "Linker",
                    "isAnswer": false
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "Operating system",
                    "isAnswer": false
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        },
        {
            "id": 1018,
            "name": "Which of the following statements are correct about delegates?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "Delegates cannot be used to call a static method of a class.",
                    "isAnswer": false
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "Delegates cannot be used to call procedures that receive variable number of arguments.",
                    "isAnswer": true
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "If signatures of two methods are same they can be called through the same delegate object.",
                    "isAnswer": false
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "Delegates cannot be used to call an instance function. Delegates cannot be used to call an instance subroutine.",
                    "isAnswer": false
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        },
        {
            "id": 1019,
            "name": "Which of the following does NOT represent Integer?",
            "questionTypeId": 1,
            "options": [
                {
                    "id": 1055,
                    "questionId": 1010,
                    "name": "Char",
                    "isAnswer": true
                },
                {
                    "id": 1056,
                    "questionId": 1010,
                    "name": "Byte",
                    "isAnswer": false
                },
                {
                    "id": 1057,
                    "questionId": 1010,
                    "name": "Short",
                    "isAnswer": false
                },
                {
                    "id": 1058,
                    "questionId": 1010,
                    "name": "Long",
                    "isAnswer": false
                }
            ],
            "questionType": {
                "id": 1,
                "name": "Multiple Choice",
                "isActive": true
            }
        }
    ]
};
quiz:Quiz;
mode:string= "quiz";
duree:number=0;
date:Date;
theme:string;
query:Params;
  constructor(private route:ActivatedRoute) { 
    console.log(route);
  }
 
  ngOnInit(): void {   
    this.route.params.subscribe(d => this.theme=d.fff);
    
    this.route.queryParams.subscribe(s=> this.query=s)
    
    if(this.theme=='aspnet')
         this.quiz= new Quiz(this.data);
    else
       this.quiz= new Quiz(this.data2);
      console.log(this.quiz);
      
      setInterval(()=>{
        this.date=new Date();
        
       this.duree++;
        if(this.quiz.config.duration*60<this.duree)
            this.mode='submit';
      }, 1000);
  }
  activeClass()
  {
      this.cls = ! this.cls;
      console.log(this.quiz);
  }

  goTo(p:number)
  {
    this.page=p;
    this.mode='quiz';
    console.log(this.duree);
  }
  score()
  {
     let nbco= this.quiz.questions.filter(q=> q.isCorrect).length;
     return nbco/this.quiz.questions.length;
  }
  recption(x:any)
  {
      console.log(x+"----"+this.quiz.config.autoMove);
      if(this.quiz.config.autoMove)
      this.goTo(this.page+1);
  }

  iseveryselected()
  {
     return this.quiz.questions.every(q=> q.isSelected);
  }
}
