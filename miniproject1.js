var Studentsx = /** @class */ (function () {
    function Studentsx(name, age, nationality) {
        this.name = name;
        this.age = age;
        this.gender = "Female";
        this.nationality = nationality;
    }
    Studentsx.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name, "\n Age: ").concat(this.age, "\n Gender: ").concat(this.gender, "\n Nationality: ").concat(this.nationality));
    };
    Studentsx.prototype.getNationality = function () {
        console.log("Nationality: ".concat(this.nationality));
    };
    return Studentsx;
}());
var UnderGraduates1 = /** @class */ (function () {
    function UnderGraduates1(name, age, nationality, batch, GPA) {
        this.name = name;
        this.age = age;
        this.gender = "Female";
        this.nationality = nationality;
        this.batch = batch;
        this.GPA = GPA;
    }
    UnderGraduates1.prototype.displayInfo = function () {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Gender:", this.gender);
        console.log("Nationality:", this.nationality);
        console.log("Batch:", this.batch);
        console.log("GPA:", this.GPA);
    };
    return UnderGraduates1;
}());
var underGraduateInstance = new UnderGraduates1("Alice", 20, "USA", 2023, 3.8);
console.log("UnderGraduate Nationality: ".concat(underGraduateInstance.nationality));
