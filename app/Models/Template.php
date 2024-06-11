<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Template
 * 
 * @property int $id
 * @property string $name
 * @property string $for
 * @property string $description
 * @property string|null $source
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Collection|HtmlSlider[] $html_sliders
 * @property Collection|ImageSlider[] $image_sliders
 * @property Collection|Page[] $pages
 *
 * @package App\Models
 */
class Template extends Model
{
	protected $table = 'templates';

	protected $fillable = [
		'name',
		'for',
		'description',
		'source'
	];

	public function html_sliders()
	{
		return $this->hasMany(HtmlSlider::class);
	}

	public function image_sliders()
	{
		return $this->hasMany(ImageSlider::class);
	}

	public function pages()
	{
		return $this->hasMany(Page::class);
	}
}
