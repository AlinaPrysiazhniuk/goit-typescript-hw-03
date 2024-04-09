/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

class Employee {
  constructor(
    public name: string,
    private department: string,
    protected salary: number
  ) {}

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }
}

const total = new Manager("Nick", "Study", 40000);

// 2 ВАРІАНТ ДЕ ЗБІЛЬШЕННЯ ЗАРПЛАТИ ВИНЕСЕНО В ОКРЕМУ ФУНКЦІЮ

// class Employee {
//   constructor(
//     public name: string,
//     private department: string,
//     protected salary: number
//   ) {}

//   getEmployeeDetails() {
//     return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
//   }
// }

// class Manager extends Employee {
//   constructor(name: string, department: string, salary: number) {
//     super(name, department, salary);
//     this.incrementSalary();
//   }

//   private incrementSalary() {
//     this.salary += 10000;
//   }
// }

// const total = new Manager("Nick", "Study", 40000);
// console.log(total.getEmployeeDetails());
