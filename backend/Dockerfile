FROM python:3.10-slim as builder

WORKDIR /app

COPY requirements.txt .
RUN pip install --user -r requirements.txt


FROM python:3.10-slim

WORKDIR /app

COPY --from=builder /root/.local /root/.local
COPY ./app ./app
COPY requirements.txt .

ENV PATH=/root/.local/bin:$PATH

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]


