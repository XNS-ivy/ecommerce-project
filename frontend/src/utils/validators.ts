export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isValidPassword = (password: string): string | null => {
  if (password.length < 6) {
    return 'Password minimal 6 karakter'
  }
  return null
}

export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+62|0)[0-9]{9,12}$/
  return phoneRegex.test(phone. replace(/\s/g, ''))
}

export interface ValidationResult {
  isValid: boolean
  errors:  { [key: string]: string }
}

export const validateLoginForm = (email: string, password: string): ValidationResult => {
  const errors:  { [key: string]: string } = {}

  if (!email) {
    errors.email = 'Email harus diisi'
  } else if (!isValidEmail(email)) {
    errors.email = 'Format email tidak valid'
  }

  if (!password) {
    errors.password = 'Password harus diisi'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

export const validateRegisterForm = (
  name: string,
  email: string,
  password: string,
  confirmPassword: string
): ValidationResult => {
  const errors: { [key: string]:  string } = {}

  if (! name) {
    errors.name = 'Nama harus diisi'
  }

  if (!email) {
    errors.email = 'Email harus diisi'
  } else if (!isValidEmail(email)) {
    errors.email = 'Format email tidak valid'
  }

  if (!password) {
    errors.password = 'Password harus diisi'
  } else {
    const passwordError = isValidPassword(password)
    if (passwordError) {
      errors.password = passwordError
    }
  }

  if (!confirmPassword) {
    errors.confirmPassword = 'Konfirmasi password harus diisi'
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Password tidak cocok'
  }

  return {
    isValid:  Object.keys(errors).length === 0,
    errors,
  }
}

export const validateCheckoutForm = (
  address: string,
  deliveryType: string
): ValidationResult => {
  const errors: { [key: string]:  string } = {}

  if (! address || address.trim().length < 10) {
    errors.address = 'Alamat pengiriman minimal 10 karakter'
  }

  if (! deliveryType) {
    errors.deliveryType = 'Tipe pengiriman harus dipilih'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}