""""""from langchain_community.document_loaders import UnstructuredPDFLoader
from langchain_community.document_loaders import OnlinePDFLoader
from langchain_community.embeddings import OllamaEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain.prompts import ChatPromptTemplate, PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_community.chat_models import ChatOllama
from langchain_core.runnables import RunnablePassthrough
from langchain.retrievers.multi_query import MultiQueryRetriever
from PyPDF2 import PdfReader
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
import streamlit as st
import torch
from langchain.embeddings import HuggingFaceInstructEmbeddings
from langchain.chains import RetrievalQA
from transformers import pipeline


def user_input(user_question):
   
    embeddings = HuggingFaceInstructEmbeddings(model_name="hkunlp/instructor-xl")
    faiss_index_path = "faiss_index"
    new_db = FAISS.jkload_local(faiss_index_path, embeddings, allow_dangerous_deserialization=True)

    retriever = new_db.as_retriever(search_kwargs={"k": 3})   
    docs = retriever.get_relevant_documents(user_question) 
    doc_texts = " ".join([doc.page_content for doc in docs])
        
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn", device=0 if torch.cuda.is_available() else -1)
    summary = summarizer(docs, max_length=50, min_length=25, do_sample=False)
    print("summarizer", ['0'])
    return (summary[0]['summary_text'])