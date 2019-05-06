export class IMenuItem {
    name: string;
    id: number;
    icon: string;
    signOut: boolean;
    routerLink: string;
}

export class IGroups {
    id: number;
    capacity: number;
    name: string;
    date: Date;
}

export class ISubjects {
    id: number;
    name: string;
}

export class IExams {
    id: number;
    time: string;
    groups: Array<IGroups>;
    name: string;
}