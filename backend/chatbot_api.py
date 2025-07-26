from fastapi import FastAPI
from pydantic import BaseModel
import sqlite3

app = FastAPI()

class ChatInput(BaseModel):
    user_id: str
    message: str

@app.post("/api/chat")
def chat(chat: ChatInput):
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    
    msg = chat.message.lower()

    # Order status query
    if "order id" in msg:
        order_id = ''.join(filter(str.isdigit, msg))
        cursor.execute("SELECT status FROM orders WHERE order_id = ?", (order_id,))
        row = cursor.fetchone()
        conn.close()
        return {"response": f"Order status: {row[0]}" if row else "Order not found."}

    # Popular products
    elif "top 5" in msg:
        cursor.execute("SELECT name, sold_count FROM products ORDER BY sold_count DESC LIMIT 5")
        rows = cursor.fetchall()
        conn.close()
        return {"response": rows}

    # Default fallback
    conn.close()
    return {"response": "Sorry, I couldn't understand your query."}
