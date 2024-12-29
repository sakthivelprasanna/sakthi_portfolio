import React, { useState, useEffect } from "react";
import { Container, Row, Stack } from "react-bootstrap";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import fullstack from "../../Assets/../Assets/full-stack.pdf";
import github from "../../Assets/../Assets/github.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Certificates = () => {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <p><strong>Fullstack-certificate</strong></p>
                    <Button
                        variant="primary"
                        href={fullstack}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download Fullstack Certificate
                    </Button>
                </Row>
                <Row className="resume">
                    <Document file={github} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </Row>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <p><strong>Github-certificate</strong></p>
                    <Button
                        variant="primary"
                        href={github}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download Github Certificate
                    </Button>
                </Row>


            </Container>
        </div>
    );
}