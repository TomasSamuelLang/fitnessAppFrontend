export default class Workout {
    name: string;
    date: Date;
    description: string;
    exercises: WorkoutExercise[];
    userId: string;
}

/* to include exercise in a workout, we must include amount of reps and sets */
export class WorkoutExercise {
    exerciseId: string;
    set: number;
    repsOrTime: string;
}