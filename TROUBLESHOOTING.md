# Troubleshooting Guide for newspaper4k Installation

## Common Issues and Solutions

### ImportError: newspaper4k is required

If you encounter the error:
```
ImportError: newspaper4k is required. Install it with: pip install newspaper4k
```

This typically indicates that newspaper4k requires system-level dependencies that aren't properly installed.

### SentencePiece Tokenizer Conversion Error

If you encounter the error:
```
ValueError: Converting from SentencePiece and Tiktoken failed, if a converter for SentencePiece is available, provide a model path with a SentencePiece tokenizer.model file.
Currently available slow->fast converters: ['AlbertTokenizer', 'BartTokenizer', ...]
```

OR

```
DebertaV2Tokenizer requires the SentencePiece library but it was not found in your environment.
```

This error occurs when the Transformers library tries to convert a SentencePiece tokenizer to a fast tokenizer but fails, or when the SentencePiece library is missing.

#### Solution:

1. **Install SentencePiece library:**
   ```bash
   # Method 1: Using conda (recommended for macOS)
   conda install -c conda-forge sentencepiece
   
   # Method 2: Using pip (if conda is not available)
   pip install sentencepiece
   ```

2. **Check your transformers version:**
   ```bash
   pip install transformers>=4.30.0
   ```

3. **The models have been updated to use slow tokenizers:**
   The code now uses `use_fast=False` when loading tokenizers to avoid conversion issues.

4. **If you're using custom models, modify tokenizer loading:**
   ```python
   # Instead of:
   tokenizer = AutoTokenizer.from_pretrained(model_id)
   
   # Use:
   tokenizer = AutoTokenizer.from_pretrained(model_id, use_fast=False)
   ```

5. **For specific models that don't support fast tokenizers:**
   ```python
   from transformers import AutoTokenizer
   
   # Force slow tokenizer
   tokenizer = AutoTokenizer.from_pretrained(
       model_id, 
       use_fast=False,
       trust_remote_code=True  # if needed for custom models
   )
   ```

#### If SentencePiece installation fails on macOS:

1. **Install system dependencies:**
   ```bash
   brew install cmake
   brew install protobuf
   ```

2. **Try installing via conda instead:**
   ```bash
   conda install -c conda-forge sentencepiece
   ```

3. **If you must use pip, try:**
   ```bash
   pip install sentencepiece --no-cache-dir
   ```

### Solution for macOS

1. **Install system dependencies using Homebrew:**
   ```bash
   brew install libxml2 libxslt
   brew install libtiff libjpeg webp little-cms2
   ```

2. **Reinstall newspaper4k:**
   ```bash
   pip uninstall newspaper4k -y
   pip install newspaper4k
   ```

3. **Test the installation:**
   ```bash
   python -c "import newspaper; from newspaper import Article; print('✅ Success!')"
   ```

### Solution for Ubuntu/Debian

1. **Install system dependencies:**
   ```bash
   sudo apt-get install libxml2-dev libxslt-dev
   sudo apt-get install libjpeg-dev zlib1g-dev libpng-dev
   ```

2. **Install Python dependencies:**
   ```bash
   sudo apt-get install python3 python3-dev python3-pip
   ```

3. **Reinstall newspaper4k:**
   ```bash
   pip3 uninstall newspaper4k -y
   pip3 install newspaper4k
   ```

### Additional Dependencies

The following Python packages are also required and should be installed automatically:
- `lxml>=4.9.0`
- `beautifulsoup4>=4.9.3`
- `Pillow>=8.0.0`
- `requests>=2.26.0`
- `nltk>=3.6.6`

### Testing Your Installation

Run this test to verify everything works:
```python
from newspaper import Article
url = 'https://www.bbc.com/news'
article = Article(url)
article.download()
print("✅ newspaper4k is working correctly!")
```

### Advanced Configuration

For JavaScript-heavy websites, you may need Playwright:
```bash
pip install playwright
playwright install
```

### Environment Variables (macOS)

If you continue to have issues, you may need to set these environment variables:
```bash
export LDFLAGS="-L/opt/homebrew/opt/libxml2/lib -L/opt/homebrew/opt/libxslt/lib"
export CPPFLAGS="-I/opt/homebrew/opt/libxml2/include -I/opt/homebrew/opt/libxslt/include"
export PKG_CONFIG_PATH="/opt/homebrew/opt/libxml2/lib/pkgconfig:/opt/homebrew/opt/libxslt/lib/pkgconfig"
```

### Still Having Issues?

1. Check your Python version (requires Python 3.8+)
2. Try creating a fresh virtual environment
3. Ensure all system dependencies are properly installed
4. Check for conflicting packages (like old newspaper3k)
5. For tokenizer issues, ensure you're using `use_fast=False` when loading tokenizers

## References

This guide is based on the official newspaper4k documentation and Context7 library documentation. 