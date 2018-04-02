export interface ICourses {
    _id: string;
    ident: string;
    major: string;
    majorName: string;
    name: string;
    instructors: string[];
    sections: {
        call_number: string;
        credits: number;
        ident: string;
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
    }[];
}