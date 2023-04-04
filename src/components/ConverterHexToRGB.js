import {useState} from "react";

export function ConverterHexToRGB()
{
    const [form, setForm] = useState({
        hex: "#",
        rgb: "",
        backgroundColor: "#ffffff"
    });

    const hexToRgb = (hex) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();


    }

    const handleChange = ({target}) =>{
        const {name, value} = target;
        setForm((prev) => ({...prev, [name]: value}));

        if(value.length == 7 && value.match(/^#?([a-f\d]{6})/) != null){
            setForm((prev) => ({...prev, backgroundColor: value,  rgb: hexToRgb(value).r + "," + hexToRgb(value).g + "," + hexToRgb(value).b}));
        }else if (value.length >= 7){
            setForm((prev) => ({...prev, rgb: "Ошибка!"}));
        }
    }

    return(
        <form onSubmit={handleSubmit} style={{backgroundColor: form.backgroundColor}}>
            <label htmlFor="hex">Color HEX:</label>
            <br/>
            <input
            id="name"
            name="hex"
            value={form.hex}
            onChange={handleChange}
            />
            <br/>
            <label htmlFor="rgb">rgb({form.rgb})</label>
        </form>
    )
}