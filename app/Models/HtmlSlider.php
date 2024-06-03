<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class HtmlSlider
 * 
 * @property int $id
 * @property int|null $template_id
 * @property string $name
 * @property string|null $uuid
 * @property bool $published
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class HtmlSlider extends Model
{
	protected $table = 'html_sliders';

	protected $casts = [
		'template_id' => 'int',
		'published' => 'bool'
	];

	protected $fillable = [
		'template_id',
		'name',
		'uuid',
		'published'
	];
}
