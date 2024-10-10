import { categories } from "../data/categories"
import { useBudget } from "../hooks/useBudget"

export default function FilterByCategory() {

    const { dispatch } = useBudget()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({type: 'add-filter-category', payload: {id: e.target.value}})
    }
    return (
        <div className="bg-white shadow-lg rounded-lg p-10">
            <form>
                <div className="flex flex-col md:flex-row gap-5 md:items-center">
                    <label htmlFor="category">Filter Expenses</label>
                    <select 
                        id="category"
                        className="bg-slate-100 p-3 flex-1 rounded"
                        onChange={handleChange}
                        >
                        <option value="">-- All Categories --</option>
                        {categories.map(category => (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    )
}
