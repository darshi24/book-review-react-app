import * as publicService from "../services/nytimes-service"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getListNamesThunk} from "../thunks/nytimes-thunks";
import {getBooksForListName, getListNames} from "../services/nytimes-service";
import BookItem from "./book-item";
import {useNavigate, useParams} from "react-router";
const SearchComponent = () => {

    const {searchTerm} = useParams();

    const navigate = useNavigate();

    const [listNames, setListNames] = useState({});
    const[search, setSearch] = useState("");
    const[results, setResults] = useState({});


    useEffect(() => {
        const api = async () => {
            const response = await getListNames();
            setListNames(response.data.results)
            console.log("Here");

        }
        api().catch(console.error);
    },[])

    useEffect(() => {
        if(searchTerm) {
            const api = async () => {
                const response = await getBooksForListName(searchTerm);
                setResults(response.data.results.books);
            }
            api().catch(console.error);
            console.log(searchTerm);
        }
    },[]);

    const selectOptionHandler = (event) => {
        setSearch(event.target.value);
    }
    const searchBooksHandler = async () => {
        const response = await getBooksForListName(search);
        setResults(response.data.results.books);
        navigate(`/search/${search}`);
    }

    return(
        <div className="mt-5">
            <div className="row justify-content-center">
                <div className="col-10 col-sm-9 col-md-8">
                    <select className="form-select" onChange={selectOptionHandler}>
                        <option value="default">Choose a category</option>
                        {
                            listNames.length > 0 ?
                                listNames.map((category) =>
                                    <option value={category.list_name_encoded} >
                                        {category.display_name}
                                    </option>
                                ) :
                                <option value="default">Loading...</option>

                        }
                    </select>
                </div>

            </div>
            <span>
                <button className="btn btn-primary w-25 mt-2" onClick={searchBooksHandler}>Search</button>
            </span>

            {
                results.length > 0 ?
                    <div className="m-2">

                        <div className="list-group">
                            {
                                results.map((book) => <BookItem book={book} key={book.rank}/>)
                            }
                        </div>
                    </div> : <div></div>

            }

        </div>


    )
}

export default SearchComponent;