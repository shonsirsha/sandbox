import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "gatsby"

export const BlogPostCard = () => {
  return (
    <Card>
      <Card.Img variant="top" src="https://dummyimage.com/350x200/000/fff" />
      <Card.Body>
        <Card.Subtitle className="text-uppercase">
          <Link to="/">Dr. fisher</Link>
          <span>&nbsp;</span>
          <span>&bull;</span>
          <span>&nbsp;</span>
          <Link to="/">Practice Name</Link>
        </Card.Subtitle>
        <Card.Subtitle className="text-muted text-uppercase small my-2">
          20 Nov 2020 | 3 min read
        </Card.Subtitle>
        <Card.Title>
          5 Ways to keep your pet happy and healthy this winter!
        </Card.Title>
        <Card.Text>
          Moment in the life of any aspiring astronomer of that it is time to
          buy that first telescope.
        </Card.Text>
        <Link to="/">Keep Reading</Link>
      </Card.Body>
    </Card>
  )
}
