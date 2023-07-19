import useAxios from 'axios-hooks';

type UserData = {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  support: { url: string; text: string };
};

function AxiosHooks() {
  const [{ data: getData, loading: getLoading, error: getError }] =
    useAxios<UserData>('https://reqres.in/api/users/1?delay=1');

  const [{ data: putData, loading: putLoading, error: putError }, executePut] =
    useAxios<UserData>(
      {
        url: 'https://reqres.in/api/users/1',
        method: 'PUT',
      },
      { manual: true }
    );

  // async function updateData() {
  //   const res = await executePut({
  //     data: {
  //       ...getData,
  //       updatedAt: new Date().toISOString(),
  //     },
  //   });
  // }

  const updateData = async () => {
    await executePut({
      data: {
        ...getData,
        updatedAt: new Date().toISOString(),
      },
    });
  };

  if (getLoading || putLoading) return <p>Loading...</p>;
  if (getError || putError) return <p>Error!</p>;

  return (
    <div>
      <button
        // onClick={async () => {
        //   await updateData();
        // }}
        onClick={updateData}
      >
        update data
      </button>
      <pre>{JSON.stringify(putData || getData, null, 2)}</pre>
    </div>
  );
}
export default AxiosHooks;
