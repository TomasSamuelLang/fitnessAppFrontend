export default class Workout {
    _id: string;
    name: string;
    date: Date;
    description: string;
    exercises: WorkoutExercise[];
    userId: string;

    constructor(date: Date, userId: string) {
        this.exercises = [];
        this.date = date;
        this.userId = userId;
    }
}

/* to include exercise in a workout, we must include amount of reps and sets */
export class WorkoutExercise {
    exerciseId: string;
    sets: number;
    repsOrTime: number;
    name: string;
    description: string = "";

    constructor(id: string, name: string) {
        this.exerciseId = id;
        this.name = name
        this.repsOrTime = 0;
        this.sets = 0;
    }
}