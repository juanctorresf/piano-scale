import clsx from "clsx"

export const Header = () => {
    return (
        <h1 
            className={ clsx(
                "m-0 text-5xl text-center text-gray-10 pt-21 mb-9 text-shadow-header",
                "md:text-6xl md:pt-45",
                "dark:text-slate-100"
            )}
        >
            Piano Scale
        </h1>
    )
}
