'use client'
import { useParams } from "next/navigation";

export default function EditProductsPage() {

    const params = useParams();
    return(

        <div>
            <h4>Edit Product: {params.id}</h4>

            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Price</label>
                    <input type="text" id="name" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Description</label>
                    <input type="text" id="name" className="form-control" />
                </div>

                <br/>
                <div>
                <button className="btn btn-success">Save</button>&nbsp;
                <button className="btn btn-warning">Cancel</button>
                </div>
            </form>
        </div>
    )


}