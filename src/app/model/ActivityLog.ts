import Workout from './Workout'

export default class ActivityLog {
    public constructor(
        public date: Date,
        public description: string,
        public workoutId: string,
        public userId: string,
    ) { }
}

export interface WorkoutWithActivityLog extends Workout {
    logs: ActivityLog[]
}