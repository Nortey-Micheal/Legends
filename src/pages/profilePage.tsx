import { useSelector } from "react-redux"
import { Link, useParams } from "react-router"
import { StoreType } from "../redux/store"

export default function ProfilePage() {
    const params = useParams<{profileId:string}>()
    const profiles = useSelector((state:StoreType) => state.profiles)
    const currrentProfile = profiles.find((proflie) => proflie.name === params.profileId)
    if (!currrentProfile) {
        throw new Error('No User Found')
    }

    console.log(currrentProfile)
    return (
        <div>
            <section className="border-2 max-w-[510px] border-violet-950 w-[95vw] bg-purple-50  rounded-2xl mx-auto mt-[10vh] ">
                <img className="rounded-2xl bg-purple-950 h-10/16 w-full" src={currrentProfile?.image} alt={currrentProfile?.name} />
                <div className="bg-purple-100 px-2 pt-4 rounded-b-2xl pb-10">
                    <div className=" mb-3 text-[18px] flex justify-between">
                        <p className="font-extrabold text-[18px] text-purple-950 bg-purple-300 lg:px-2 rounded mr-4">{currrentProfile?.name}</p>
                        <p className="text-purple-700 font-bold bg-purple-200 px-2 rounded">{currrentProfile?.age} years</p>
                    </div>
                    <div className="mb-3 text-[18px] flex justify-between gp-[50%]">
                        <p className="font-extrabold text-[18px] text-purple-950 bg-purple-300 px-2 rounded uppercase">{currrentProfile?.gender}</p>
                        <p className="text-purple-950 font-bold bg-purple-200 px-2 rounded">Nickie : <span className="text-purple-700 font-bold">{currrentProfile?.nickname}</span></p>
                    </div>
                    <div className="mb-3 text-violet-950 text-[18px] font-medium">
                        {currrentProfile?.description}
                    </div>
                    <div className="mb-3">
                        <p className="font-extrabold text-[20px] text-violet-950">
                            Likes : {currrentProfile?.likes.map(like => (
                                <span className="font-medium text-[18px] text-purple-950"> {like} ,</span>
                            ))}
                        </p>
                    </div>
                    <div>
                        <p className="font-extrabold text-[20px] text-violet-950">
                            Dislikes : {currrentProfile?.dislikes.map(dislike => (
                                <span className="font-medium text-[18px] text-purple-950"> {dislike},</span>
                            ))}
                        </p>
                    </div>
                </div>
            </section>
            <Link to={'/'} className="md:ml-[47vw] inline-block mb-[10vh] mt-5 mx-[30vw] hover:underline hover:bg-purple-950 hover:text-purple-50 bg-purple-200 rounded px-4 py-1 text-xl text-violet-800 font-bold ">Go to Home</Link>
        </div>
    )
}