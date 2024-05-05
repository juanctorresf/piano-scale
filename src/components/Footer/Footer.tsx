import clsx from "clsx"
import iconGitHub from "../../assets/github-mark.svg"


export const Footer = () => {
    return (
        <>
            <p
                className={ clsx( 
                    "mt-20 text-center text-black dark:text-white",
                    "lg:mt-40"
                )}
            >Made by <a 
                    href="https://www.linkedin.com/in/juan-torres-devv/" 
                    target="_blank"
                    className="underline transition-colors hover:text-blue-400"
                >Juan Torres</a>
            </p>

            <div className="flex items-center justify-center py-4 text-center">
                <div className="w-8 h-8">
                    <a href="https://github.com/juanctorresf/piano-scale" target="_blank">
                        <img src={iconGitHub} alt="Git Hub" />
                    </a>
                </div>
            </div>
        </>
    )
}
