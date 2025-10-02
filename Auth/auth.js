// Campus Key Authentication JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize authentication functionality
    initializeAuth();
});

function initializeAuth() {
    // Get current page
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'auth.html') {
        initializeUnifiedAuth();
    } else if (currentPage === 'login.html') {
        initializeLogin();
    } else if (currentPage === 'register.html') {
        initializeRegister();
    }
    
    // Initialize common functionality
    initializeCommon();
}

function initializeUnifiedAuth() {
    // Initialize unified authentication with smooth transitions
    initializeFormSwitching();
    initializeSignIn();
    initializeSignUp();
    initializeIllustrationUpdates();
}

function initializeFormSwitching() {
    const signInSection = document.getElementById('signInSection');
    const signUpSection = document.getElementById('signUpSection');
    const switchToSignUp = document.getElementById('switchToSignUp');
    const switchToSignIn = document.getElementById('switchToSignIn');
    const signInDot = document.getElementById('signInDot');
    const signUpDot = document.getElementById('signUpDot');
    
    // Switch to Sign Up
    if (switchToSignUp) {
        switchToSignUp.addEventListener('click', function(e) {
            e.preventDefault();
            switchToForm('signUp');
        });
    }
    
    // Switch to Sign In
    if (switchToSignIn) {
        switchToSignIn.addEventListener('click', function(e) {
            e.preventDefault();
            switchToForm('signIn');
        });
    }
    
    // Toggle dots
    if (signInDot) {
        signInDot.addEventListener('click', function() {
            switchToForm('signIn');
        });
    }
    
    if (signUpDot) {
        signUpDot.addEventListener('click', function() {
            switchToForm('signUp');
        });
    }
}

function switchToForm(formType) {
    const signInSection = document.getElementById('signInSection');
    const signUpSection = document.getElementById('signUpSection');
    const signInDot = document.getElementById('signInDot');
    const signUpDot = document.getElementById('signUpDot');
    
    if (formType === 'signUp') {
        // Switch to Sign Up
        signInSection.classList.remove('active');
        signInSection.classList.add('slide-out-left');
        
        setTimeout(() => {
            signInSection.classList.remove('slide-out-left');
            signUpSection.classList.add('active');
            signUpSection.classList.remove('slide-out-right');
        }, 250);
        
        // Update dots
        signInDot.classList.remove('active');
        signUpDot.classList.add('active');
        
        // Update illustration
        updateIllustration('signUp');
        
    } else {
        // Switch to Sign In
        signUpSection.classList.remove('active');
        signUpSection.classList.add('slide-out-right');
        
        setTimeout(() => {
            signUpSection.classList.remove('slide-out-right');
            signInSection.classList.add('active');
            signInSection.classList.remove('slide-out-left');
        }, 250);
        
        // Update dots
        signUpDot.classList.remove('active');
        signInDot.classList.add('active');
        
        // Update illustration
        updateIllustration('signIn');
    }
}

function updateIllustration(formType) {
    const illustrationTitle = document.getElementById('illustrationTitle');
    const illustrationSubtitle = document.getElementById('illustrationSubtitle');
    
    if (formType === 'signUp') {
        illustrationTitle.textContent = 'Join the Campus Key Community!';
        illustrationSubtitle.textContent = 'Start your academic journey with access to study materials, AI assistance, and a supportive student community.';
    } else {
        illustrationTitle.textContent = 'Welcome Back, Student!';
        illustrationSubtitle.textContent = 'Continue your learning journey with access to notes, PYQs, and AI assistance.';
    }
}

function initializeIllustrationUpdates() {
    // Add smooth transitions to illustration text
    const illustrationTitle = document.getElementById('illustrationTitle');
    const illustrationSubtitle = document.getElementById('illustrationSubtitle');
    
    if (illustrationTitle) {
        illustrationTitle.style.transition = 'all 0.5s ease';
    }
    if (illustrationSubtitle) {
        illustrationSubtitle.style.transition = 'all 0.5s ease';
    }
}

function initializeSignIn() {
    const signInForm = document.getElementById('signInForm');
    const signInBtn = document.getElementById('signInBtn');
    const signInLoader = document.getElementById('signInLoader');
    const passwordToggle = document.getElementById('signInPasswordToggle');
    const passwordInput = document.getElementById('signInPassword');
    
    // Password toggle functionality
    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', function() {
            togglePasswordVisibility(passwordInput, this);
        });
    }
    
    // Form submission
    if (signInForm) {
        signInForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleSignIn();
        });
    }
    
    // Social login buttons in sign in section
    const signInSocialBtns = document.querySelectorAll('#signInSection .social-btn');
    signInSocialBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const provider = this.classList.contains('google-btn') ? 'Google' : 'GitHub';
            handleSocialLogin(provider);
        });
    });
}

function initializeSignUp() {
    const signUpForm = document.getElementById('signUpForm');
    const signUpBtn = document.getElementById('signUpBtn');
    const signUpLoader = document.getElementById('signUpLoader');
    const passwordInput = document.getElementById('signUpPassword');
    const passwordToggle = document.getElementById('signUpPasswordToggle');
    
    // Password toggle functionality
    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', function() {
            togglePasswordVisibility(passwordInput, this);
        });
    }
    
    // Password strength checker
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            checkPasswordStrength(this.value);
        });
    }
    
    // Form submission
    if (signUpForm) {
        signUpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleSignUp();
        });
    }
    
    // Social login buttons in sign up section
    const signUpSocialBtns = document.querySelectorAll('#signUpSection .social-btn');
    signUpSocialBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const provider = this.classList.contains('google-btn') ? 'Google' : 'GitHub';
            handleSocialLogin(provider);
        });
    });
}

function initializeLogin() {
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');
    const loginLoader = document.getElementById('loginLoader');
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordInput = document.getElementById('password');
    
    // Password toggle functionality
    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-eye');
            icon.classList.toggle('fa-eye-slash');
        });
    }
    
    // Form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }
    
    // Social login buttons
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const provider = this.classList.contains('google-btn') ? 'Google' : 'GitHub';
            handleSocialLogin(provider);
        });
    });
}

function initializeRegister() {
    const registerForm = document.getElementById('registerForm');
    const registerBtn = document.getElementById('registerBtn');
    const registerLoader = document.getElementById('registerLoader');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordToggle = document.getElementById('passwordToggle');
    const confirmPasswordToggle = document.getElementById('confirmPasswordToggle');
    
    // Password toggle functionality
    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', function() {
            togglePasswordVisibility(passwordInput, this);
        });
    }
    
    if (confirmPasswordToggle && confirmPasswordInput) {
        confirmPasswordToggle.addEventListener('click', function() {
            togglePasswordVisibility(confirmPasswordInput, this);
        });
    }
    
    // Password strength checker
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            checkPasswordStrength(this.value);
        });
    }
    
    // Confirm password validation
    if (confirmPasswordInput && passwordInput) {
        confirmPasswordInput.addEventListener('input', function() {
            validatePasswordMatch(passwordInput.value, this.value);
        });
    }
    
    // Form submission
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleRegister();
        });
    }
    
    // Social login buttons
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const provider = this.classList.contains('google-btn') ? 'Google' : 'GitHub';
            handleSocialLogin(provider);
        });
    });
}

function initializeCommon() {
    // Add loading animations
    addLoadingAnimations();
    
    // Add form validation
    addFormValidation();
    
    // Add keyboard navigation
    addKeyboardNavigation();
    
    // Add accessibility features
    addAccessibilityFeatures();
}

function togglePasswordVisibility(input, button) {
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
    
    const icon = button.querySelector('i');
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
}

function checkPasswordStrength(password) {
    const strengthBar = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');
    
    if (!strengthBar || !strengthText) return;
    
    let strength = 0;
    let strengthLabel = '';
    
    // Check password criteria
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    // Update strength bar and text
    strengthBar.className = 'strength-fill';
    
    if (strength <= 2) {
        strengthBar.classList.add('weak');
        strengthLabel = 'Weak password';
    } else if (strength === 3) {
        strengthBar.classList.add('fair');
        strengthLabel = 'Fair password';
    } else if (strength === 4) {
        strengthBar.classList.add('good');
        strengthLabel = 'Good password';
    } else if (strength >= 5) {
        strengthBar.classList.add('strong');
        strengthLabel = 'Strong password';
    }
    
    strengthText.textContent = strengthLabel;
}

function validatePasswordMatch(password, confirmPassword) {
    const errorElement = document.getElementById('confirmPasswordError');
    const confirmInput = document.getElementById('confirmPassword');
    
    if (!errorElement || !confirmInput) return;
    
    if (confirmPassword && password !== confirmPassword) {
        errorElement.textContent = 'Passwords do not match';
        confirmInput.classList.add('error');
        confirmInput.classList.remove('success');
    } else if (confirmPassword && password === confirmPassword) {
        errorElement.textContent = '';
        confirmInput.classList.add('success');
        confirmInput.classList.remove('error');
    } else {
        errorElement.textContent = '';
        confirmInput.classList.remove('error', 'success');
    }
}

function handleSignIn() {
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Clear previous errors
    clearErrors();
    
    // Validate form
    if (!validateSignInForm(email, password)) {
        return;
    }
    
    // Show loading state
    showLoadingState('signInBtn', 'signInLoader');
    
    // Simulate API call
    setTimeout(() => {
        // Simulate successful login
        showSuccessMessage('Login successful! Redirecting...');
        
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('rememberMe', rememberMe);
        
        // Redirect to dashboard or home page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }, 2000);
}

function handleSignUp() {
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const college = document.getElementById('collegeName').value;
    const password = document.getElementById('signUpPassword').value;
    const terms = document.getElementById('terms').checked;
    
    // Clear previous errors
    clearErrors();
    
    // Validate form
    if (!validateSignUpForm(name, email, college, password, terms)) {
        return;
    }
    
    // Show loading state
    showLoadingState('signUpBtn', 'signUpLoader');
    
    // Simulate API call
    setTimeout(() => {
        // Simulate successful registration
        showSuccessMessage('Account created successfully! Redirecting to login...');
        
        // Switch to sign in form after successful registration
        setTimeout(() => {
            switchToForm('signIn');
            // Pre-fill email
            document.getElementById('signInEmail').value = email;
        }, 2000);
    }, 3000);
}

function handleLogin() {
    const form = document.getElementById('loginForm');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Clear previous errors
    clearErrors();
    
    // Validate form
    if (!validateLoginForm(email, password)) {
        return;
    }
    
    // Show loading state
    showLoadingState('loginBtn', 'loginLoader');
    
    // Simulate API call
    setTimeout(() => {
        // Simulate successful login
        showSuccessMessage('Login successful! Redirecting...');
        
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('rememberMe', rememberMe);
        
        // Redirect to dashboard or home page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }, 2000);
}

function handleRegister() {
    const form = document.getElementById('registerForm');
    const formData = new FormData(form);
    
    // Clear previous errors
    clearErrors();
    
    // Validate form
    if (!validateRegisterForm()) {
        return;
    }
    
    // Show loading state
    showLoadingState('registerBtn', 'registerLoader');
    
    // Simulate API call
    setTimeout(() => {
        // Simulate successful registration
        showSuccessMessage('Account created successfully! Redirecting to login...');
        
        // Redirect to login page
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }, 3000);
}

function handleSocialLogin(provider) {
    showLoadingMessage(`Connecting with ${provider}...`);
    
    // Simulate social login
    setTimeout(() => {
        showSuccessMessage(`${provider} login successful! Redirecting...`);
        
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loginProvider', provider);
        
        // Redirect to dashboard or home page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }, 2000);
}

function validateSignInForm(email, password) {
    let isValid = true;
    
    // Email validation
    if (!email) {
        showError('signInEmailError', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('signInEmailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Password validation
    if (!password) {
        showError('signInPasswordError', 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showError('signInPasswordError', 'Password must be at least 6 characters');
        isValid = false;
    }
    
    return isValid;
}

function validateSignUpForm(name, email, college, password, terms) {
    let isValid = true;
    
    // Name validation
    if (!name.trim()) {
        showError('signUpNameError', 'Student name is required');
        isValid = false;
    }
    
    // Email validation
    if (!email) {
        showError('signUpEmailError', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('signUpEmailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    // College validation
    if (!college.trim()) {
        showError('collegeNameError', 'College name is required');
        isValid = false;
    }
    
    // Password validation
    if (!password) {
        showError('signUpPasswordError', 'Password is required');
        isValid = false;
    } else if (password.length < 8) {
        showError('signUpPasswordError', 'Password must be at least 8 characters');
        isValid = false;
    }
    
    // Terms validation
    if (!terms) {
        showError('termsError', 'You must agree to the terms and conditions');
        isValid = false;
    }
    
    return isValid;
}

function validateLoginForm(email, password) {
    let isValid = true;
    
    // Email validation
    if (!email) {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Password validation
    if (!password) {
        showError('passwordError', 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters');
        isValid = false;
    }
    
    return isValid;
}

function validateRegisterForm() {
    let isValid = true;
    
    // Get form elements
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const university = document.getElementById('university');
    const course = document.getElementById('course');
    const year = document.getElementById('year');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const terms = document.getElementById('terms');
    
    // First name validation
    if (!firstName.value.trim()) {
        showError('firstNameError', 'First name is required');
        isValid = false;
    }
    
    // Last name validation
    if (!lastName.value.trim()) {
        showError('lastNameError', 'Last name is required');
        isValid = false;
    }
    
    // Email validation
    if (!email.value) {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation (optional)
    if (phone.value && !isValidPhone(phone.value)) {
        showError('phoneError', 'Please enter a valid phone number');
        isValid = false;
    }
    
    // University validation
    if (!university.value) {
        showError('universityError', 'Please select your university');
        isValid = false;
    }
    
    // Course validation
    if (!course.value) {
        showError('courseError', 'Please select your course');
        isValid = false;
    }
    
    // Year validation
    if (!year.value) {
        showError('yearError', 'Please select your academic year');
        isValid = false;
    }
    
    // Password validation
    if (!password.value) {
        showError('passwordError', 'Password is required');
        isValid = false;
    } else if (password.value.length < 8) {
        showError('passwordError', 'Password must be at least 8 characters');
        isValid = false;
    }
    
    // Confirm password validation
    if (!confirmPassword.value) {
        showError('confirmPasswordError', 'Please confirm your password');
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        showError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }
    
    // Terms validation
    if (!terms.checked) {
        showError('termsError', 'You must agree to the terms and conditions');
        isValid = false;
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
    
    // Add error class to corresponding input
    const inputId = elementId.replace('Error', '');
    const input = document.getElementById(inputId);
    if (input) {
        input.classList.add('error');
        input.classList.remove('success');
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.input-error');
    errorElements.forEach(element => {
        element.textContent = '';
    });
    
    const inputs = document.querySelectorAll('.form-input, .form-select');
    inputs.forEach(input => {
        input.classList.remove('error', 'success');
    });
}

function showLoadingState(btnId, loaderId) {
    const btn = document.getElementById(btnId);
    const loader = document.getElementById(loaderId);
    
    if (btn && loader) {
        btn.classList.add('loading');
        btn.disabled = true;
    }
}

function hideLoadingState(btnId, loaderId) {
    const btn = document.getElementById(btnId);
    const loader = document.getElementById(loaderId);
    
    if (btn && loader) {
        btn.classList.remove('loading');
        btn.disabled = false;
    }
}

function showSuccessMessage(message) {
    // Create success notification
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10B981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function showLoadingMessage(message) {
    // Create loading notification
    const notification = document.createElement('div');
    notification.className = 'loading-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <div class="spinner"></div>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #3B82F6;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 2 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 2000);
}

function addLoadingAnimations() {
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100%);
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .notification-content .spinner {
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-top: 2px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
    `;
    document.head.appendChild(style);
}

function addFormValidation() {
    // Real-time validation for email
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !isValidEmail(this.value)) {
                showError('emailError', 'Please enter a valid email address');
            } else if (this.value) {
                clearError('emailError');
            }
        });
    }
    
    // Real-time validation for phone
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            if (this.value && !isValidPhone(this.value)) {
                showError('phoneError', 'Please enter a valid phone number');
            } else if (this.value) {
                clearError('phoneError');
            }
        });
    }
}

function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = '';
    }
    
    const inputId = elementId.replace('Error', '');
    const input = document.getElementById(inputId);
    if (input) {
        input.classList.remove('error');
    }
}

function addKeyboardNavigation() {
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

function addAccessibilityFeatures() {
    // Add ARIA labels and roles
    const forms = document.querySelectorAll('.auth-form');
    forms.forEach(form => {
        form.setAttribute('role', 'form');
        form.setAttribute('aria-label', 'Authentication form');
    });
    
    // Add focus management
    const inputs = document.querySelectorAll('.form-input, .form-select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
}

// Check if user is already logged in
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentPage = window.location.pathname.split('/').pop();
    
    if (isLoggedIn === 'true' && (currentPage === 'login.html' || currentPage === 'register.html')) {
        // User is already logged in, redirect to home
        window.location.href = 'index.html';
    }
}

// Initialize login status check
checkLoginStatus();

// Add console welcome message
console.log('%c🎓 Campus Key Authentication', 'color: #6B46C1; font-size: 18px; font-weight: bold;');
console.log('%cWelcome to the authentication system!', 'color: #14B8A6; font-size: 14px;');
console.log('%cAll forms include validation and user-friendly feedback.', 'color: #84CC16; font-size: 14px;');

