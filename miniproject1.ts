interface Iundergrad {
    name: string;
    age: number;
    gender: string;
    nationality: string;
    batch: number;
    GPA: number;
}

class Studentsx {
    name: string;
    age: number;
    gender: string;
    nationality: string;

    constructor(name: string, age: number, nationality: string) {
        this.name = name;
        this.age = age;
        this.gender = "Female";
        this.nationality = nationality;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}\n Age: ${this.age}\n Gender: ${this.gender}\n Nationality: ${this.nationality}`);
    }

    getNationality(): void {
        console.log(`Nationality: ${this.nationality}`);
    }
}

class UnderGraduates1 implements Iundergrad {
    name: string;
    age: number;
    gender: string;
    nationality: string;
    batch: number;
    GPA: number;

    constructor(name: string, age: number, nationality: string, batch: number, GPA: number) {
        this.name = name;
        this.age = age;
        this.gender = "Female";
        this.nationality = nationality;
        this.batch = batch;
        this.GPA = GPA;
    }

    displayInfo(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Gender:", this.gender);
        console.log("Nationality:", this.nationality);
        console.log("Batch:", this.batch);
        console.log("GPA:", this.GPA);
    }
}

const underGraduateInstance = new UnderGraduates1("Alice", 20, "USA", 2023, 3.8);

console.log(`UnderGraduate Nationality: ${underGraduateInstance.nationality}`);
