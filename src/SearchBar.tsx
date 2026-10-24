import { ChangeEvent, FormEvent, useState } from "react";
import { TextField, Button, Box } from "@mui/material";

interface SearchBarProps {
    label: string;
    onSearch: (query: string) => void;
    onReset: () => void;
}

export default function SearchBar({label, onSearch, onReset}: SearchBarProps) {
    const [query, setQuery] = useState("");

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    }

    const handleReset = () => {
        setQuery("");
        onReset();
    }

    return (
        <>
            <Box className="mb-10" component="form" onSubmit={handleSubmit} sx={{display: 'flex', flexDirection: {xs:'column', sm:'row'}, alignItems: 'stretch', gap: 3}}>
                <TextField
                    id="outlined-basic"
                    label={label}
                    variant="outlined"
                    value={query}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                    sx={{
                        flexGrow: {xs:0, sm:1},
                        width: {xs:'100%', sm:'auto'},
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderRadius: "0px",
                            borderColor: "rgba(136, 136, 136, 0.3)", // Default border color
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#d4d3d3",
                        },
                    }}
                    slotProps={{
                        htmlInput: {
                            className: "dark:text-white"
                        },
                        inputLabel: {
                            className: "dark:text-white"
                        }
                    }}
                />
                <div className="flex w-full sm:w-auto gap-5">
                    <Button className="rounded-none bg-black text-white dark:!bg-white dark:!text-black" type="submit" variant="contained" sx={{flexGrow: {xs:1, sm:0}}}>Search</Button>
                    <Button className="rounded-none" onClick={handleReset} variant="outlined" color="inherit" sx={{flexGrow: {xs:1, sm:0}}}>Clear</Button>
                </div>
            </Box>
        </>
    )
}