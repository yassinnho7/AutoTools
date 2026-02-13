# كيفية الحصول على بيانات Cloudflare للنشر

## 1. الحصول على CLOUDFLARE_ACCOUNT_ID

1. سجل الدخول إلى [Cloudflare Dashboard](https://dash.cloudflare.com)
2. سترى معرف الحساب في عنوان URL أو في الإعدادات
3. أو اذهب إلى: **Overview** → ستجد **Account ID** في الجهة اليمنى

مثال: `https://dash.cloudflare.com/1234567890abcdef1234567890abcdef`

## 2. الحصول على CLOUDFLARE_API_TOKEN

### الطريقة الأولى: إنشاء Token جديد

1. اذهب إلى: **Profile** → **API Tokens**
2. انقر على **Create Custom Token**

3. أدخل البيانات التالية:
   - **Name**: `GitHub Pages Deploy`
   - **Permissions**:
     - `Account` → `Cloudflare Pages` → `Edit`
     - `Zone` → `Zone` → `Read`
   - **Account Resources**: اختر حسابك
   - **TTL**: اختر `Never` أو وقت مناسب

4. انقر **Continue** ثم **Create Token**

5. **هام**: انسخ الـ Token فوراً! لن تتمكن من رؤيته مرة أخرى

### الطريقة الثانية (أسهل): استخدام Global API Key

1. اذهب إلى: **Profile** → **API Tokens**
2. انقر على **View** بجانب **Global API Key**
3. قد يطلب منك تسجيل الدخول مرة أخرى
4. انسخ الـ API Key

## 3. إضافة المتغيرات في GitHub

1. اذهب إلى مستودع GitHub: https://github.com/yassinnho7/AutoTools
2. انتقل إلى **Settings** → **Secrets and variables** → **Actions**
3. انقر على **New repository secret**
4. أضف:
   - `CLOUDFLARE_API_TOKEN` = (الـ Token الذي نسخته)
   - `CLOUDFLARE_ACCOUNT_ID` = (معرف الحساب)

## 4. التحقق من النشر

بعد إضافة المتغيرات، انتقل إلى:
- **Actions** في GitHub
- سترى عملية النشر تعمل
- بعد انتهاء النشر، الموقع سيكون متاحاً على: https://autotools-2k3.pages.dev/

## ملاحظة مهمة

إذا واجهت مشاكل مع GitHub Actions، يمكنك أيضاً:
1. ربط GitHub repo بـ Cloudflare Pages مباشرة
2. Cloudflare سيقوم بالنشر تلقائياً عند كل push

لربط GitHub بـ Cloudflare:
1. اذهب إلى [Cloudflare Pages](https://pages.cloudflare.com)
2. انقر **Create a project**
3. اختر **Connect to Git**
4. اختر مستودع `AutoTools`
5. اضبط الإعدادات:
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
6. انقر **Save and Deploy**
