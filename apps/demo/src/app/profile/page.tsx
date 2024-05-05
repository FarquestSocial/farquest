import { ConnectFarcaster } from "../components/admin/buttons/ConnectFarcaster";

export default function ProfilePage() {
  // const { user } = useUser();

  return (
    <div className='p-4 text-white'>
      <div className='text-2xl font-bold'>Profile</div>
      <div className='mx-auto bg-secondary rounded-2xl p-8 w-[700px] mt-8 h-[600px]'>
        <section className='flex items-center'>
          <div className='w-20 h-20 rounded-full bg-blue-500'></div>
          <div className='ml-4'>
            <div className='text-2xl font-bold'>Username</div>
            <div>0 quests completed</div>
          </div>
        </section>
        <section className='pt-4'>
          <p className='bold text-xl'>Accounts</p>
          <ConnectFarcaster />
        </section>
      </div>
      {/* {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.user?.quests.map((quest) => (
            <div key={quest.id}>
              <div>{quest.type}</div>
              <div>{quest.status}</div>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}
