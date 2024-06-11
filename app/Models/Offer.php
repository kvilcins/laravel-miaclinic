<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Offer
 * 
 * @property int $id
 * @property string|null $uuid
 * @property int $page_id
 * @property int $section_page_id
 * @property int|null $service_id
 * @property int|null $service_page_id
 * @property string $name
 * @property string|null $image
 * @property int|null $price
 * @property int|null $discount
 * @property int|null $old_price
 * @property string|null $teaser
 * @property bool $price_is_min
 * @property bool $active
 * @property string|null $rotation
 * @property Carbon|null $starts_at
 * @property Carbon|null $ends_at
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Page $page
 *
 * @package App\Models
 */
class Offer extends Model
{
	protected $table = 'offers';

	protected $casts = [
		'page_id' => 'int',
		'section_page_id' => 'int',
		'service_id' => 'int',
		'service_page_id' => 'int',
		'price' => 'int',
		'discount' => 'int',
		'old_price' => 'int',
		'price_is_min' => 'bool',
		'active' => 'bool',
		'starts_at' => 'datetime',
		'ends_at' => 'datetime'
	];

	protected $fillable = [
		'uuid',
		'page_id',
		'section_page_id',
		'service_id',
		'service_page_id',
		'name',
		'image',
		'price',
		'discount',
		'old_price',
		'teaser',
		'price_is_min',
		'active',
		'rotation',
		'starts_at',
		'ends_at'
	];

	public function page()
	{
		return $this->belongsTo(Page::class);
	}
}
