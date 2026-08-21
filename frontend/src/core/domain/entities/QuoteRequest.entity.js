export class QuoteRequest {
  constructor({ fullName, email, phone, subject, message }) {
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.subject = subject;
    this.message = message;
    this.submittedAt = new Date().toISOString();
  }

  static create(data) {
    return new QuoteRequest({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    });
  }

  isValid() {
    return Boolean(this.fullName && this.email && this.message);
  }
}