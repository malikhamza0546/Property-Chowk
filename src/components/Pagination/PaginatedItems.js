import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import ReactPaginate from "react-paginate"
import Items from "./Items.js"
import styled from "styled-components"
const StyledPaginateContainer = styled.div`
	.pagination {
		color: #0366d6;
	}
	.break-me {
		cursor: default;
	}
	.active {
		border-color: transparent;
		background-color: #0366d6;
		color: white;
	}
`

function PaginatedItems({ itemsPerPage, cardDetail , type ,func }) {
	console.log("pagination dataa" , cardDetail)
	const [currentItems, setCurrentItems] = useState(null)
	const [pageCount, setPageCount] = useState(0)
	const [items, setItems] = useState(cardDetail)
	// Here we use item offsets; we could also use page offsets
	// following the API or data you're working with.
	const [itemOffset, setItemOffset] = useState(0)

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage
		console.log(`Loading items from ${itemOffset} to ${endOffset}`)
		setCurrentItems(items?.slice(itemOffset, endOffset))
		setPageCount(Math.ceil(items?.length / itemsPerPage))
	}, [itemOffset, itemsPerPage])

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % items.length
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		)
		setItemOffset(newOffset)
	}

	return (
		<>
			<Items currentItems={currentItems} type={type} func={func}/>
			<nav aria-label="Page navigation example">
				<ReactPaginate
					breakLabel="..."
					nextLabel=">>"
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pageCount}
					previousLabel="<<"
					renderOnZeroPageCount={null}
					containerClassName="pagination justify-content-center"
					pageClassName="page-item"
					pageLinkClassName="page-link"
					previousClassName="page-item"
					previousLinkClassName="page-link"
					nextClassName="page-item"
					nextLinkClassName="page-link"
					activeClassName="active"
					breakClassName="page-item"
					breakLinkClassName="page-link"
				/>
			</nav>
		</>
	)
}

export default PaginatedItems
