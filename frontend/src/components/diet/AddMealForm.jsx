import { useState } from "react";
import api from "../../services/api";

const AddMealForm = ({ fetchMeals }) => {
  const [formData, setFormData] = useState({
    mealName: "",
    mealType: "Breakfast",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/meals", formData);
      await fetchMeals();

      setFormData({
        mealName: "",
        mealType: "Breakfast",
        calories: "",
        protein: "",
        carbs: "",
        fat: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mb-8 rounded-3xl border border-cyan-900/30 bg-slate-900/70 p-6 backdrop-blur-sm">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
          ADD MEAL
        </p>

        <h2 className="mt-1 text-2xl font-bold text-white">
          Nutrition Tracker
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Record your meals and monitor your daily nutrition intake.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          {/* Meal Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Meal Name
            </label>

            <input
              type="text"
              name="mealName"
              value={formData.mealName}
              onChange={handleChange}
              placeholder="e.g. Boiled Eggs"
              required
              className="
          w-full
          rounded-2xl
          border border-slate-700
          bg-slate-950/50
          px-4 py-3
          text-white
          placeholder:text-slate-500
          outline-none
          transition-all duration-200
          hover:border-cyan-400
          focus:border-cyan-500
          focus:ring-2 focus:ring-cyan-500/20
        "
            />
          </div>

          {/* Meal Type */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Meal Type
            </label>

            <div className="relative">
              <select
                name="mealType"
                value={formData.mealType}
                onChange={handleChange}
                className="
            w-full
            appearance-none
            rounded-2xl
            border border-slate-700
            bg-slate-950/50
            px-4 py-3
            pr-12
            text-white
            outline-none
            transition-all duration-200
            hover:border-cyan-400
            focus:border-cyan-500
            focus:ring-2 focus:ring-cyan-500/20
          "
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-cyan-400">
                ▼
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {/* Calories */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Calories
            </label>

            <input
              type="number"
              min="0"
              name="calories"
              value={formData.calories}
              onChange={handleChange}
              placeholder="Calories"
              required
              className="
          w-full
          rounded-2xl
          border border-slate-700
          bg-slate-950/50
          px-4 py-3
          text-white
          placeholder:text-slate-500
          outline-none
          transition-all duration-200
          hover:border-cyan-400
          focus:border-cyan-500
          focus:ring-2 focus:ring-cyan-500/20
        "
            />
          </div>

          {/* Protein */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Protein (g)
            </label>

            <input
              type="number"
              min="0"
              name="protein"
              value={formData.protein}
              onChange={handleChange}
              placeholder="Protein"
              className="
          w-full
          rounded-2xl
          border border-slate-700
          bg-slate-950/50
          px-4 py-3
          text-white
          placeholder:text-slate-500
          outline-none
          transition-all duration-200
          hover:border-cyan-400
          focus:border-cyan-500
          focus:ring-2 focus:ring-cyan-500/20
        "
            />
          </div>

          {/* Carbs */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Carbs (g)
            </label>

            <input
              type="number"
              min="0"
              name="carbs"
              value={formData.carbs}
              onChange={handleChange}
              placeholder="Carbs"
              className="
          w-full
          rounded-2xl
          border border-slate-700
          bg-slate-950/50
          px-4 py-3
          text-white
          placeholder:text-slate-500
          outline-none
          transition-all duration-200
          hover:border-cyan-400
          focus:border-cyan-500
          focus:ring-2 focus:ring-cyan-500/20
        "
            />
          </div>

          {/* Fat */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Fat (g)
            </label>

            <input
              type="number"
              min="0"
              name="fat"
              value={formData.fat}
              onChange={handleChange}
              placeholder="Fat"
              className="
          w-full
          rounded-2xl
          border border-slate-700
          bg-slate-950/50
          px-4 py-3
          text-white
          placeholder:text-slate-500
          outline-none
          transition-all duration-200
          hover:border-cyan-400
          focus:border-cyan-500
          focus:ring-2 focus:ring-cyan-500/20
        "
            />
          </div>
        </div>

        <button
          type="submit"
          className="
      w-full
      rounded-2xl
      bg-cyan-500
      px-6 py-3
      font-semibold
      text-slate-950
      transition-all duration-200
      hover:bg-cyan-400
      hover:shadow-lg
      hover:shadow-cyan-500/20
    "
        >
          Add Meal
        </button>
      </form>
    </div>
  );
};

export default AddMealForm;
