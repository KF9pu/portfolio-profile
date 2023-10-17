class Singleton {
  private static instance: Singleton | null = null; // 싱글톤 인스턴스를 저장할 변수
  private name: string = "I am a Singleton";

  private constructor() {
    // 생성자를 private로 선언하여 외부에서 인스턴스 생성을 막습니다.
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public getName(): string {
    return this.name;
  }

  public setName(newName: string): void {
    this.name = newName;
  }
}

// 사용 예제
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // true, 두 변수는 같은 싱글톤 인스턴스를 가리킵니다.
console.log(singleton1.getName()); // "I am a Singleton"

// 추가된 기능 사용
singleton1.setName("Updated Singleton");
console.log(singleton1.getName()); // "Updated Singleton"
