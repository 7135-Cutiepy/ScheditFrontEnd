import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-schedule-viewer',
  templateUrl: './single-schedule-viewer.component.html',
  styleUrls: ['./single-schedule-viewer.component.css']
})
export class SingleScheduleViewerComponent implements OnInit {
  /**Hardcoded test file**/
  schedule = {"sched": [
      {
        "groupName": "any",
        "ident": "3521",
        "major": "AE",
        "majorName": "Aerospace Engineering",
        "name": "Flight Dynamics",
        "priority": "Med",
        "professors": [
          {
            "$$hashKey": "object:655",
            "name": "Any",
            "priority": "Med"
          }
        ],
        "section": {
          "_id": "562580d90248b461481330a1",
          "call_number": 20819,
          "credits": 4,
          "ident": "A",
          "instructor": {
            "fname": "Eric Marie J ",
            "lname": "Feron"
          },
          "seat_time": "2016-03-20T17:24:10.353Z",
          "seats": {
            "actual": 62,
            "capacity": 65,
            "remaining": 3
          },
          "timeslots": [
            {
              "_id": "569ae16f14583c20002f025a",
              "day": "M",
              "end_time": 595,
              "location": "Guggenheim 442",
              "start_time": 545
            },
            {
              "_id": "569ae16f14583c20002f0259",
              "day": "T",
              "end_time": 565,
              "location": "Guggenheim 442",
              "start_time": 485
            },
            {
              "_id": "569ae16f14583c20002f0258",
              "day": "R",
              "end_time": 565,
              "location": "Guggenheim 442",
              "start_time": 485
            }
          ]
        }
      },
      {
        "groupName": "any",
        "ident": "3756",
        "major": "APPH",
        "majorName": "Applied Physiology",
        "name": "Physiology Lab",
        "priority": "Med",
        "professors": [
          {
            "$$hashKey": "object:332",
            "name": "Any",
            "priority": "Med"
          }
        ],
        "section": {
          "_id": "5625778c0248b4614813286e",
          "call_number": 27773,
          "credits": 1,
          "ident": "B",
          "instructor": {
            "fname": "Edward Michael ",
            "lname": "Balog"
          },
          "seat_time": "2016-03-01T23:10:03.246Z",
          "seats": {
            "actual": 15,
            "capacity": 24,
            "remaining": 9
          },
          "timeslots": [
            {
              "_id": "569ae15414583c20002efb04",
              "day": "T",
              "end_time": 1075,
              "location": "Clough Undergraduate Commons 483",
              "start_time": 905
            }
          ]
        }
      },
      {
        "groupName": "any",
        "ident": "1120",
        "major": "AS",
        "majorName": "Air Force Aerospace Studies",
        "name": "Foundations of the Af II",
        "priority": "Med",
        "professors": [
          {
            "$$hashKey": "object:413",
            "name": "Any",
            "priority": "Med"
          }
        ],
        "section": {
          "_id": "562577710248b46148132334",
          "call_number": 20519,
          "credits": 1,
          "ident": "A",
          "instructor": {
            "fname": "Michael C ",
            "lname": "Olvera"
          },
          "seat_time": "2016-03-13T18:26:20.921Z",
          "seats": {
            "actual": 22,
            "capacity": 60,
            "remaining": 38
          },
          "timeslots": [
            {
              "_id": "569ae13d14583c20002ef24f",
              "day": "T",
              "end_time": 685,
              "location": "O'Keefe 202",
              "start_time": 635
            }
          ]
        }
      },
      {
        "groupName": "any",
        "ident": "4420",
        "major": "AS",
        "majorName": "Air Force Aerospace Studies",
        "name": "Prep for Active Duty",
        "priority": "Med",
        "professors": [
          {
            "$$hashKey": "object:365",
            "name": "Any",
            "priority": "Med"
          }
        ],
        "section": {
          "_id": "5625778e0248b461481328d9",
          "call_number": 20526,
          "credits": 3,
          "ident": "A",
          "instructor": {
            "fname": "Lindsey E ",
            "lname": "Myhr"
          },
          "seat_time": "2016-03-20T17:24:10.040Z",
          "seats": {
            "actual": 9,
            "capacity": 40,
            "remaining": 31
          },
          "timeslots": [
            {
              "_id": "569ae15214583c20002efa4e",
              "day": "T",
              "end_time": 685,
              "location": "O'Keefe 201",
              "start_time": 605
            },
            {
              "_id": "569ae15214583c20002efa4d",
              "day": "R",
              "end_time": 685,
              "location": "O'Keefe 201",
              "start_time": 605
            }
          ]
        }
      },
      {
        "groupName": "any",
        "ident": "2220",
        "major": "AS",
        "majorName": "Air Force Aerospace Studies",
        "name": "Us Air & Space Power II",
        "priority": "Med",
        "professors": [
          {
            "$$hashKey": "object:396",
            "name": "Any",
            "priority": "Med"
          }
        ],
        "section": {
          "_id": "5625777c0248b46148132525",
          "call_number": 23316,
          "credits": 1,
          "ident": "B",
          "instructor": {
            "fname": "Michael C ",
            "lname": "Olvera"
          },
          "seat_time": "2016-01-15T00:53:40.680Z",
          "seats": {
            "actual": 3,
            "capacity": 50,
            "remaining": 47
          },
          "timeslots": [
            {
              "_id": "569ae14514583c20002ef535",
              "day": "R",
              "end_time": 865,
              "location": "O'Keefe 202",
              "start_time": 815
            }
          ]
        }
      },
      {
        "groupName": "any",
        "ident": "2340",
        "major": "CS",
        "majorName": "Computer Science",
        "name": "Objects and Design",
        "priority": "Med",
        "professors": [
          {
            "$$hashKey": "object:931",
            "name": "Any",
            "priority": "Med"
          }
        ],
        "section": {
          "_id": "562580d40248b46148132f4c",
          "call_number": 20764,
          "credits": 3,
          "ident": "A",
          "instructor": {
            "fname": "Robert Lee ",
            "lname": "Waters"
          },
          "seat_time": "2016-03-25T04:34:18.093Z",
          "seats": {
            "actual": 300,
            "capacity": 300,
            "remaining": 0
          },
          "timeslots": [
            {
              "_id": "569ae16814583c20002f0118",
              "day": "M",
              "end_time": 835,
              "location": "Clough Undergraduate Commons 152",
              "start_time": 785
            },
            {
              "_id": "569ae16814583c20002f0117",
              "day": "W",
              "end_time": 835,
              "location": "Clough Undergraduate Commons 152",
              "start_time": 785
            },
            {
              "_id": "569ae16814583c20002f0116",
              "day": "F",
              "end_time": 835,
              "location": "Clough Undergraduate Commons 152",
              "start_time": 785
            }
          ]
        }
      },
      {
        "groupName": "any",
        "ident": "1601",
        "major": "AE",
        "majorName": "Aerospace Engineering",
        "name": "Introduction to Ae",
        "priority": "Med",
        "professors": [
          {
            "$$hashKey": "object:635",
            "name": "Any",
            "priority": "Med"
          }
        ],
        "section": {
          "_id": "562577780248b46148132456",
          "call_number": 28763,
          "credits": 1,
          "ident": "B",
          "instructor": {
            "fname": "Amy R ",
            "lname": "Pritchett"
          },
          "seat_time": "2016-03-23T22:51:36.277Z",
          "seats": {
            "actual": 42,
            "capacity": 42,
            "remaining": 0
          },
          "timeslots": [
            {
              "_id": "569ae14214583c20002ef3eb",
              "day": "T",
              "end_time": 805,
              "location": "Instr Center 219",
              "start_time": 725
            },
            {
              "_id": "569ae14214583c20002ef3ea",
              "day": "R",
              "end_time": 805,
              "location": "Instr Center 219",
              "start_time": 725
            }
          ]
        }
      }
    ]}
  schedule = {}
  times_lower_bound = 480;
  times_upper_bound = 1260;
  days = [0,1,2,3,4];
  day_strings = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  times = [];
  time_strings = [];
  c = 0;
  week_schedule = {};
  colors = ["red", "blue", "green", "orange", "yellow", "purple", "pink"];
  unique_classes = {};

  id;

  constructor(private http: HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
      console.log(this.id)
    });

    this.http.get('http://localhost:3000/schedule/' + this.id).subscribe(data => {
      this.schedule = data;
      console.log(data);
      
      for (var i = this.times_lower_bound; i <= this.times_upper_bound; i++) {
        var time_string;
        if (i < 720) {
          var hour = Math.floor(i/60);
          var min = i - hour * 60;
          time_string = hour+":"+ ('00'+ min).substr(-2) + "a.m.";
        } else {
          var hour = Math.floor(i/60);
          var min = i - hour * 60;
          time_string = ((hour>12) ? hour-12 : hour)+":"+ ('00'+ min).substr(-2) + "p.m.";
        }
        this.times.push(i);
        this.time_strings[i] = time_string;
        var day_schedule = {0: "None", 1: "None", 2: "None", 3: "None", 4: "None"};
        for (var d = 0; d < 5; d++) {
          var subsched = this.schedule['sched'];
          var course_names = Object.keys(subsched);
          for (var k = 0; k < course_names.length; k++) {
          
            var course = subsched[k];
            var timeslots = Object.keys(course['section']['timeslots']);
            
            for (var j = 0; j < timeslots.length; j++) {
            
              var timeslot = course['section']['timeslots'][j]
              var day;
              switch (timeslot['day']) {
              case 'M':
                  day = 0;
                  break;
              case 'T':
                  day = 1;
                  break;
              case 'W':
                  day = 2;
                  break;
              case 'R':
                  day = 3;
                  break;
              case 'F':
                  day = 4;
                  break;
              default:
              }
              
              if ((i == timeslot['start_time']) && (day == d)) {
                var name = course['major'] + " " + course['ident'];
                var length = timeslot['end_time'] - timeslot['start_time'];
                if (!(name in this.unique_classes)) {
                  this.unique_classes[name] = this.c;
                  this.c = this.c + 1;
                }
                var color = this.colors[this.unique_classes[name]];
                
                var class_object = {'name':name, 'length':length, 'color':color};
                day_schedule[d] = class_object;
              }
            }
          }
        }
        this.week_schedule[i] = day_schedule;
      }
    });
  }
}
