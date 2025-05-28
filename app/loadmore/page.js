"use client";

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "8732bf94-cad7-4568-807b-28b80f637022",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="email@example.com"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            required
            rows="3"
            placeholder="Enter Message"
          ></textarea>
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}

// function DataList() {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const itemsPerPage = 10;

//   useEffect(() => {
//     fetchData();
//   }, [page]);

//   const fetchData = async () => {
//     if (loading || !hasMore) return;
//     setLoading(true);

//     try {
//       const response = await fetch(
//         `YOUR_API_ENDPOINT?_page=${page}&_limit=${itemsPerPage}`
//       );

//       const newData = await response.json();

//       if (newData.length === 0) {
//         setHasMore(false);
//       } else {
//         setData((prevData) => [...prevData, ...newData]);
//         setPage((prevPage) => prevPage + 1);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//       {hasMore && (
//         <button onClick={fetchData} disabled={loading}>
//           {loading ? "Loading..." : "Load More"}
//         </button>
//       )}
//       {!hasMore && <p>No more data to load.</p>}
//     </div>
//   );
// }

// export default DataList;
