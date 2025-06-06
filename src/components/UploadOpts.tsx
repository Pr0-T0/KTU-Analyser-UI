
const UploadOpts = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-full">
    <ul className="flex flex-wrap justify-center gap-4">
        <li className="border rounded-2xl px-5 py-1 cursor-pointer">B.Tech</li>
        <li className="border rounded-2xl px-5 py-1 cursor-pointer">M.Tech</li>
        <li className="border rounded-2xl px-5 py-1 cursor-pointer">M.Sc</li>
    </ul>
    <button className="bg-blue-400 px-10 py-3 text-white rounded-2xl font-semibold shadow-md hover:bg-blue-500 transition cursor-pointer">
        Submit
    </button>
</div>

  )
}

export default UploadOpts