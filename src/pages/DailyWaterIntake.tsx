import { useState, useRef, useEffect } from "react";

const DailyWaterIntake = () => {
  const [weight, setWeight] = useState<number>(0);
  const [dailyWaterIntake, setDailyWaterIntake] = useState<number>(0);
  const [theme, setTheme] = useState("light");

  const weightInputRef = useRef<HTMLInputElement | null>(null);

  const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+event.target.value);
  };

  const onClick = () => {
    setDailyWaterIntake(weight * 2.2 * (30 / 2));
    console.log(dailyWaterIntake);
  };

  const onReset = () => {
    setWeight(0);
    setDailyWaterIntake(0);
    if (weightInputRef.current) {
      weightInputRef.current.value = "";
    }
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
    console.log(theme);
  };

  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.classList.remove("light-theme", "dark-theme");
    rootElement.classList.add(theme === "light" ? "light-theme" : "dark-theme");
  }, [theme]);

  return (
    <>
      <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
      <h2>{dailyWaterIntake.toFixed(2)} มิลลิลิตร</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          id="weight"
          name="name"
          placeholder="น้ำหนักของคุณ (กิโลกรัม)"
          onChange={onChangeWeight}
          ref={weightInputRef}
        />
      </div>
      <div>
        <button style={{ marginRight: "20px" }} onClick={onClick}>
          คำนวณ
        </button>
        <button className="button-secondary" onClick={onReset}>
          เคลียร์
        </button>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
      >
        <select
          style={{ padding: "15px 15px", borderRadius: "20px" }}
          value={theme}
          onChange={handleThemeChange}
        >
          <option value="light">🔆Light Theme</option>
          <option value="dark">🌙 Dark Theme</option>
        </select>
      </div>
    </>
  );
};

export default DailyWaterIntake;
