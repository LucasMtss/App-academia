import { Link } from "expo-router";

interface ILinkButtonProps {
    title: string;
    link: string;
}

export function LinkButton({title, link, ...rest}: ILinkButtonProps){
    return (
        <Link href={link} className="text-slate-300 text-center text-base" {...rest}>
            {title}
        </Link>
    )
}