class VersionarchiveMigration

  def self.set_languages
    Versionarchive.where(:prod_key => /^php\//i).update_all(        language: Product::A_LANGUAGE_PHP    )
    Versionarchive.where(:prod_key => /^pip\//i).update_all(        language: Product::A_LANGUAGE_PYTHON )
    Versionarchive.where(:prod_key => /^Node\//i).update_all(       language: Product::A_LANGUAGE_NODEJS )
    Versionarchive.where(:prod_key => /^npm\//i).update_all(        language: Product::A_LANGUAGE_NODEJS )
    Versionarchive.where(:prod_key => /^R\//i).update_all(          language: Product::A_LANGUAGE_R )
    Versionarchive.where(:prod_key => /^JavaScript\//i).update_all( language: Product::A_LANGUAGE_JAVASCRIPT )
    Versionarchive.where(:prod_key => /^Clojure\//i).update_all(    language: Product::A_LANGUAGE_CLOJURE )
    Versionarchive.where(:prod_key => /^[a-z]+\.[a-z\.]+\/[a-z]+/i).update_all( language: Product::A_LANGUAGE_JAVA )

    Versionarchive.where(:name => /gem$/i).update_all(       language: Product::A_LANGUAGE_RUBY   )
    Versionarchive.where(:name => /jar$/i).update_all(       language: Product::A_LANGUAGE_JAVA )
    Versionarchive.where(:name => /pom$/i).update_all(       language: Product::A_LANGUAGE_JAVA )
  end

  def self.set_languages_slow
    archs = Versionarchive.where(:language => nil)
    archs.each do |arch|
      product = Product.find_by_key( arch.prod_key )
      if product.nil?
        arch.remove
        p "remove #{arch.prod_key} - #{arch.name}"
      else
        arch.language = product.language
        arch.save
      end
    end
  end

  def self.update_php_prod_keys
    archs = Versionarchive.where(:prod_key => /^php\//i)
    archs.each do |arch|
      arch.prod_key = arch.prod_key.gsub("php\/", "")
      arch.save
    end
  end

  def self.update_pip_prod_keys
    archs = Versionarchive.where(:prod_key => /^pip\//i)
    archs.each do |arch|
      arch.prod_key = arch.prod_key.gsub("pip\/", "")
      arch.save
    end
  end

  def self.update_npm_prod_keys
    archs = Versionarchive.where(:prod_key => /^npm\//i)
    archs.each do |arch|
      arch.prod_key = arch.prod_key.gsub("npm\/", "")
      arch.save
    end
  end

  def self.update_r_prod_keys
    archs = Versionarchive.where(:prod_key => /^r\//i)
    p "#{archs.count} matching the R package regex "
    archs.each do |arch|
      arch.prod_key = arch.prod_key.gsub("r\/", "")
      arch.save
    end
  end

end
