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

export class Workout2 {
  _id: string;
  name: string;
  date: Date;
  description: string;
  exercises: ViewWorkoutExercise[];
  userId: string;

  constructor(date: Date, userId: string) {
      this.exercises = [];
      this.date = date;
      this.userId = userId;
  }
}

/* to include exercise in a workout, we must include amount of reps and sets */
export class ViewWorkoutExercise {
    id: string;
    sets: number;
    repsOrTime: number;
    name: string;
    description: string = "";

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name
        this.repsOrTime = 0;
        this.sets = 0;
    }
}

export class WorkoutExercise {
    id: string;
    set: number;
    repsOrTime: number;

    constructor(id: string, repsOrTime: number, set: number) {
        this.id = id;
        this.repsOrTime = repsOrTime;
        this.set = set;
    }
}
