<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Service
 * 
 * @property int $id
 * @property string|null $uuid
 * @property int|null $page_id
 * @property string|null $name
 * @property int|null $price
 * @property string|null $teaser
 * @property bool $price_is_min
 * @property bool $is_installment
 * @property bool $active
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Page|null $page
 * @property Collection|Work[] $works
 *
 * @package App\Models
 */
class Service extends Model
{
	protected $table = 'services';

	protected $casts = [
		'page_id' => 'int',
		'price' => 'int',
		'price_is_min' => 'bool',
		'is_installment' => 'bool',
		'active' => 'bool'
	];

	protected $fillable = [
		'uuid',
		'page_id',
		'name',
		'price',
		'teaser',
		'price_is_min',
		'is_installment',
		'active'
	];

	public function page()
	{
		return $this->belongsTo(Page::class);
	}

	public function works()
	{
		return $this->hasMany(Work::class);
	}
}
