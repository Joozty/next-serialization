export async function getServerSideProps(context) {
  return {
    props: {
        longList: Array.from(Array(10000), (_, i) => ({
            id: i,
            name: 'test name'
        })),
    },
  }
}

export default function Home({longList}) {
  return <h1>Test {longList.length}</h1>
}
