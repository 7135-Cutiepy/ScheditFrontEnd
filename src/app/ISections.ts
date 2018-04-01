export interface ISections {
    _id: string;
    major: string;
    course_number: string;
    section: string;
    crn: string;
    name: string;
    semester: string;
    credits: number;
    instructor: {
        lname: string;
        fname: string;
    };
    timeslots: {
        start_time: number;
        end_time: number;
        day: string;
        location: string;
    }[];
    majorName: string;
}