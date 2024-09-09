import { createContext, useState } from "react";

// 1 Crear contexto - Consumimos este
export const FiltersContext = createContext()

// 2 Crear el Provider, para proveer el contexto - Este es el que nos da los datos
export function FiltersProvider ({children}) {

    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return (
        <FiltersContext.Provider value ={{
            filters,
            setFilters
        }}>
        {children}
        </FiltersContext.Provider>
    )
}