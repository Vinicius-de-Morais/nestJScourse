import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: 'fundamentos de nestjs',
            description: 'fundamentos do framework nestjs',
            tags: ['netjs', 'javascript', 'typescript', 'node.js']
        }
    ];

    findall(){
        return this.courses;
    }

    findOne(id: string){
        const course = this.courses.find((course: Course) => course.id == Number(id));

        if(!course){
            throw new HttpException(
                `couldn't find an course with ID ${id}`, 
                HttpStatus.NOT_FOUND
            );
        }else{
            return course;
        }
    }

    create(createCourseDto: any){
        this.courses.push(createCourseDto);
    }

    update(id: string, updateCourseDto: any){
        const indexCourse = this.courses.findIndex(
            (course: Course) => course.id == Number(id)
        );

        this.courses[indexCourse] = updateCourseDto
    }

    delete(id: string){
        const indexCourse = this.courses.findIndex(
            (course: Course) => course.id == Number(id)
        );
        
        if(indexCourse >= 0)
        this.courses.splice(indexCourse, 1)
    }
}
