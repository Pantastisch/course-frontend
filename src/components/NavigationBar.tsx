import { RootState } from "../store";
import Title from "./Title";
// import { setEmail, setToken, setUsername } from "../stores/profileStore";
import { useSelector } from 'react-redux'

function NavigationBar() {
    const profileStore = useSelector((state: RootState) => state.profile)
    // const dispatch = useDispatch()

    // const username = profileStore.username

    // console.log(profileStore)

    return (
        <>
            <nav className="p-2 bg-amber-200">
                <ul className="flex flex-row items-center justify-between">
                    <li>
                        <Title className="text-2xl font-semibold" />
                    </li>
                    <li>
                        <a href="/profile">
                            <div className="flex flex-row gap-x-4 items-center justify-between">
                                <div>
                                    <div className="text-gray-500 text-sm italic">@{profileStore.username}</div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>

            <nav className="p-2 bg-amber-200">
                <ul className="flex flex-row items-center justify-between">
                    <li>
                        <Title className="text-2xl font-semibold" />
                    </li>
                    <li>
                        <a href="/login" className="p-2 border rounded-lg bg-blue-500 text-white">
                            Login
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavigationBar;